export interface FoodCreditHistory {
    id: string;
    userId: string;
    amount: number;
    reason?: string | null;
    adminId?: string | null;
    createdAt: string;
}

export interface FoodCredit {
    id: string;
    userId: string;
    balance: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    credits?: FoodCredit | null;
    creditHistory?: FoodCreditHistory[];
}

export interface FoodItem {
    id: string;
    name: string;
    price: number;
    imagePath: string;
    description?: string | null;
}

export interface OrderItem {
    id: string;
    orderId: string;
    foodItemId: string;
    quantity: number;
    customizations?: string | null;
    foodItem: FoodItem;
}

export interface Order {
    id: string;
    userId: string;
    status: string;
    arrivalTime: string;
    estimatedReadyTime: string;
    readyNotified: boolean;
    orderItems: OrderItem[];
    user?: User;
}
