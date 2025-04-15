export interface Deal {
    id: number,
    organization_id: number,
    account_id: number,
    value: number, 
    status: string,
    created_at:Date,
    updated_at:Date
}

export interface Organization{
    id: number,
    name: string,
    created_at: Date,
    updated_at: Date
}