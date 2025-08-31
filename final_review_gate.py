import sys
import os

if __name__ == "__main__":
    # Set unbuffered output for responsive interaction
    try:
        sys.stdout = os.fdopen(sys.stdout.fileno(), 'w', buffering=1)
        sys.stderr = os.fdopen(sys.stderr.fileno(), 'w', buffering=1)
    except Exception:
        pass  # Ignore if unbuffering fails

    print("--- FINAL REVIEW GATE ACTIVE ---", flush=True)
    print("AI has completed primary actions. Awaiting your review or sub-prompts.", flush=True)
    print("Enter a sub-prompt or type 'TASK_COMPLETE', 'Done', 'Quit', or 'q' to finish.", flush=True)

    active_session = True
    while active_session:
        try:
            print("REVIEW_GATE_AWAITING_INPUT:", end="", flush=True)
            user_input = sys.stdin.readline().strip()

            if not user_input:  # Empty input, continue looping
                continue
            if user_input.upper() in ['TASK_COMPLETE', 'DONE', 'QUIT', 'Q']:
                print(f"--- REVIEW GATE: COMPLETION SIGNALED WITH '{user_input.upper()}' ---", flush=True)
                active_session = False
            else:
                print(f"USER_REVIEW_SUB_PROMPT: {user_input}", flush=True)

        except KeyboardInterrupt:
            print("--- REVIEW GATE: INTERRUPTED BY USER ---", flush=True)
            active_session = False
        except Exception as e:
            print(f"--- REVIEW GATE ERROR: {e} ---", flush=True)
            active_session = False

    print("--- FINAL REVIEW GATE EXITED ---", flush=True)