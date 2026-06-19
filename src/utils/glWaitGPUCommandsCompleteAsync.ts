export function glWaitGPUCommandsCompleteAsync(gl: WebGL2RenderingContext): Promise<void> {
  const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0)!;
  gl.flush();

  return new Promise<void>((resolve, reject) => {
    const check = (): void => {
      const status = gl.clientWaitSync(sync, 0, 0);
      if (status === gl.WAIT_FAILED) {
        gl.deleteSync(sync);
        reject(new Error('glClientWaitSync failed'));
        return;
      } else if (status === gl.TIMEOUT_EXPIRED) {
        setTimeout(check, 1); // 1 is the magic number, may want to adjust
        return;
      } else {
        gl.deleteSync(sync);
        resolve();
      }
    };

    check();
  });
}
