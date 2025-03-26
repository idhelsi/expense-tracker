import { Category } from "../types/Category";

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    health: { title: 'Saúde', color: 'red', expense: true },
    education: { title: 'Educação', color: 'purple', expense: true },
    transportation: { title: 'Transporte', color: 'yellow', expense: true },
    utilities: { title: 'Contas', color: 'orange', expense: true },
    other: { title: 'Outros', color: 'gray', expense: true }
}