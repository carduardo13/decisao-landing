import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { throttle } from './utils';

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should execute the function immediately on the first call', () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not execute the function again within the limit', () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    throttled();
    throttled();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should execute the function if called again after the limit', () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(150);
    throttled();
    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments correctly', () => {
    const func = vi.fn();
    const throttled = throttle(func, 100);

    throttled('arg1', 2);
    expect(func).toHaveBeenCalledWith('arg1', 2);
  });
});
