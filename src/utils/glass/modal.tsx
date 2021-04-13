import { useCallback, useEffect } from "react";
import { ModalProps } from "./@types/modal";

const Modal: React.FC<ModalProps> = ({
  name,
  className,
  close,
  closeButton = false,
  children,
  show,
  size,
  pageScroll = true,
  ...rest
}) => {
  if (!close) {
    close = () => {
      modal.hide(name);
      checkModalStatus();
    };
  }

  const checkModalStatus = useCallback(() => {
    if (!pageScroll && modal.isOpen(name)) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [name, pageScroll]);

  useEffect(() => {
    checkModalStatus();
  });

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
      console.warn(`\n"${name}" modal not found in DOM.`);
      return;
    }

    modal.classList.remove("-modal-hide");
    modal.classList.add("-modal-show");
  }

  public static hide(name: string) {
    const modal = this.findModal(name);

    if (modal === null) {
      console.warn(`\n"${name}" modal not found in DOM.`);
      return;
    }

    modal.classList.remove("-modal-show");
    modal.classList.add("-modal-hide");
  }

  public static findModal(name: string): HTMLElement | null
  {
    return document.getElementById(`${name}-modal`);
  }

  public static isOpen(name: string): boolean | null
  {
    const modal = this.findModal(name);

    if (modal === null) {
      console.warn(`\n"${name}" modal not found in DOM.`);
      return null;
    }

    return modal.classList.contains("-modal-show");
  }
}

export default Modal;
