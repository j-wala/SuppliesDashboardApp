import { MongoClient } from 'mongodb';

export class MongoDBConnection {
    private readonly uri: string;
    private readonly client: MongoClient;

    constructor() {
        this.uri = 'mongodb://localhost:27017';
        this.client = new MongoClient(this.uri);
    }

    public async getSupplies(): Promise<any> {
        try {
            await this.client.connect();
            const database = this.client.db('suppliesDB');
            const supplies = database.collection('supplies');
            const supplyList = await supplies.find().toArray();
            return supplyList;
        } finally {
            await this.client.close();
        }
    }
}