import { ModalProps } from "./@types/modal";

const Modal: React.FC<ModalProps> = ({
  name,
  className,
  close,
  closeButton = false,
  children,
  show,
  size,
  ...rest
}) => {
  if (!close) {
    close = () => {
      modal.hide(name);
    };
  }

  return (
    <div
      className={`glass-modal ${className} ${
        show ? "-modal-show" : "-modal-hide"
      }`}
      id={`${name}-modal`}
    >
      <div className="glass-modal__overlay" onClick={close}></div>
      <div className={`glass-modal__modal -size-${size || "md"}`} {...rest}>
        {closeButton && (
          <button
            onClick={close}
            className="material-icons glass-modal__modal__close"
          >
            close
          </button>
        )}
        <div className="glass-modal__modal__content">{children}</div>
      </div>
    </div>
  );
}

export class modal {
  public static show(name: string) {
    const modal = this.findModal(name);

    if (modal === null) {
      return;
    }

    modal.classList.remove("-modal-hide");
    modal.classList.add("-modal-show");
  }

  public static hide(name: string) {
    const modal = this.findModal(name);

    if (modal === null) {
      return;
    }

    modal.classList.remove("-modal-show");
    modal.classList.add("-modal-hide");
  }

  protected static findModal(name: string): HTMLElement | null
  {
    return document.getElementById(`${name}-modal`);
  }
}

export default Modal;
