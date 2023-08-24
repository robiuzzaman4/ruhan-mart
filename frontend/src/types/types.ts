import { MouseEventHandler } from "react";

// types for container component
export type TContainerProps = {
    children: React.ReactNode;
    className?: string;
};

// types for button component
export type TButtonProps = {
    children: React.ReactNode;
    className: string;
    type?: "button" | "submit";
    onClick?: MouseEventHandler<HTMLButtonElement>
}

// types for add product form props
export type TAddProductFormProps = {
    addModalIsOpen: boolean;
    closeModal: () => void;
    handleAddProduct: (e: React.FormEvent<HTMLFormElement>) => void;
}

// types for update product form props - used on 👉 'UpdateProductForm' component
export type TUpdateProductFormProps = {
    updateModalIsOpen: boolean;
    closeModal: () => void;
    handleUpdateProduct: (e: React.FormEvent<HTMLFormElement>, id: string) => void;
    selectedProduct: TSelectedProduct;
}
type TSelectedProduct = {
    selectedProductId: string;
    selectedProductName: string;
    selectedProductPrice: number;
    selectedProductWeight: string;
};


// type for img upload btn props
export type TImgUploadBtnProps = {
    setImgSrc: React.Dispatch<React.SetStateAction<string>>;
}

// types for product table row - used on 👉 'TableRow' component
export type TProductProps = {
    _id: string;
    product_name: string;
    product_price: number;
    product_weight: string;
    product_image: string;
    handleDeleteProduct: (id: string) => void;
    handleUpdateProduct: (e: React.FormEvent<HTMLFormElement>, id: string) => void;
}
