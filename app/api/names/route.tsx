import names from './names.json';

export const dynamic = 'force-static';

export async function GET(req: any, res: any) {
    return new Response(JSON.stringify(names));
}