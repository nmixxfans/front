import loading from "../css/loading.module.css";

export default function LoadingCircle() {
  return (
    <div className={loading.loadingCircle}>
      <div className={loading.loadingCircleBar}></div>
    </div>
  )
}