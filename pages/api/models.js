export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    const { default: modelsRes } = await import('../../data/models.json');
    const modelsData = JSON.parse(JSON.stringify(modelsRes));
    res.status(200).json(modelsData);
}
