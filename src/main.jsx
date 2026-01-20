import { createRoot } from "react-dom/client";
import React from "react";
const App = React.lazy(() => import("./App"));
import { StrictMode } from "react";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<LoaderSpinner />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);

function LoaderSpinner() {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <svg
        fill="#5103D3FF"
        viewBox="0 0 24 24"
        className="size-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="12" r="3">
          <animate
            id="spinner_qFRN"
            begin="0;spinner_OcgL.end+0.25s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="12" cy="12" r="3">
          <animate
            begin="spinner_qFRN.begin+0.1s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
        <circle cx="20" cy="12" r="3">
          <animate
            id="spinner_OcgL"
            begin="spinner_qFRN.begin+0.2s"
            attributeName="cy"
            calcMode="spline"
            dur="0.6s"
            values="12;6;12"
            keySplines=".33,.66,.66,1;.33,0,.66,.33"
          />
        </circle>
      </svg>
    </div>
  );
}
