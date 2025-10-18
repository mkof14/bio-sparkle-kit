import React from "react";

type State = { hasError: boolean; message?: string; stack?: string };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    const e = error as Error;
    return { hasError: true, message: e?.message || String(error), stack: (e && (e.stack || "")) || "" };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: 20, fontFamily: "ui-sans-serif, system-ui"}}>
          <h1>⚠️ Runtime error</h1>
          <pre style={{whiteSpace:"pre-wrap"}}>{this.state.message}</pre>
          <details open>
            <summary>stack</summary>
            <pre style={{whiteSpace:"pre-wrap"}}>{this.state.stack}</pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
