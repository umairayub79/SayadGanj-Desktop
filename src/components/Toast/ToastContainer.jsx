import Toast from "./Toast";
import { useToastStateContext } from "../../context/ToastContext";

export default function ToastContainer() {
    const { toast } = useToastStateContext()
    return (
        <div className="absolute bottom-10 w-full z-50">
            {toast.id && <div className="max-w-xl mx-auto">
                <Toast id={toast.id} key={toast.id} type={toast.type} message={toast.message} />
            </div>
            }

        </div>
    )
}