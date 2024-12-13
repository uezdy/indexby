import names from './names.json';

export async function GET(req: any, res: any) {
    return new Response(JSON.stringify(names));
}