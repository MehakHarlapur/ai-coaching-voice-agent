import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default function Handler(props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "400px", // restrict width
          maxWidth: "90%", // responsive for small screens
          border: "2px solid #ccc",
          borderRadius: "16px",
          padding: "30px",
          background: "linear-gradient(180deg, #ffffff, #f9f9fb)", // soft gradient instead of plain white
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)", // softer shadow
        }}
      >
        <StackHandler app={stackServerApp} routeProps={props} />
      </div>
    </div>
  );
}
