const inventoryItem = {
    group_id: 0,
    group_name: "",
    unit: "",
    item_type: "",
    product_type: "",
    is_taxable: true,
    tax_id: 0,
    description: "",
    group_attribute_name1: "",
    name: "",
    rate: 0,
    purchase_rate: 0,
    reorder_level: 0,
    initial_stock: 0,
    initial_stock_rate: 0,
    vendor_id: 0,
    vendor_name: "",
    sku: "",
    upc: 0,
    ean: 0,
    part_number: 0,
    attribute_option_name1: "",
    purchase_description: "",
}
export class InventoryItem {
    public group_id: number;
    public group_name: string;
    public unit: string;
    public item_type: string;
    public product_type: string;
    public is_taxable: boolean;
    public tax_id: number;
    public description: string;
    public group_attribute_name1: string;
    public name: string;
    public rate: number;
    public purchase_rate: number;
    public reorder_level: number;
    public initial_stock: number;
    public initial_stock_rate: number;
    public vendor_id: number;
    public vendor_name: string;
    public sku: string;
    public upc: number;
    public ean: number;
    public part_number: number;
    public attribute_option_name1: string;
    public purchase_description: string;

    constructor(data) {
        if (data) {
            this.fromJSON(data)
        }
    }

    getJSON() {
        return JSON.parse(JSON.stringify(this))
    }


    fromJSON(data: any) {
        const keys = Object.keys(data)

        keys.forEach(key => {
            switch (typeof inventoryItem[key]) {
                case 'string':
                    this[key] = data[key].toString()
                    break;
                case 'number':
                    this[key] = parseInt(data[key])
                    break;
                case 'boolean':
                    this[key] = data[key].toLowerCase() === 'true' || data[key] === '1'
                    break;
                default:
                    this[key] = data[key]
                    return;
            }
        })
    }
}