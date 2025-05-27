import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

export default function DeleteConfirmDialog({ isOpen, onClose, onConfirm, title, description, itemName }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title || "Confirmar eliminación"}</DialogTitle>
          <DialogDescription>
            {description || `¿Estás seguro que deseas eliminar ${itemName}? Esta acción no se puede deshacer.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <div className="flex gap-2">
            <button onClick={onClose} className="btn-secondary-modern">
              Cancelar
            </button>
            <button onClick={onConfirm} className="btn-primary-modern" style={{ background: "#dc2626" }}>
              Eliminar
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}