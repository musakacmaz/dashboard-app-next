export default async function handler(req, res) {
    const { default: applicationsRes } = await import('../../data/apps.json');
    const applicationsData = JSON.parse(JSON.stringify(applicationsRes));
    res.status(200).json(applicationsData);
}
