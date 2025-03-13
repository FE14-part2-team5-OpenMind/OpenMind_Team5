import { useEffect, useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleModalOpen = () => {
      setIsModalOpen((prev) => !prev);
    };

      if (open) {
        handleModalOpen();
    }
  }, [open]);

  return {
    setOpen,
    isModalOpen,
    open,
  };
};
export default useModal;
