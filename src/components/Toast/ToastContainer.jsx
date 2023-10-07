import Toast from "./Toast";
import { useToastStateContext } from "../../context/ToastContext";

export default function ToastContainer() {
  const { toast } = useToastStateContext();
  return (
    <div className="absolute top-28 w-full z-50">
      {toast.id && (
        <div className="max-w-xl mx-auto">
          <Toast key={toast.id} toast={toast} />
        </div>
      )}
    </div>
  );
}
