export default async function handler(req, res) {
    const { default: modelsRes } = await import('../../data/models.json');
    const modelsData = JSON.parse(JSON.stringify(modelsRes));
    res.status(200).json(modelsData);
}
