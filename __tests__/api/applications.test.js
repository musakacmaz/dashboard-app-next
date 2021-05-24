import applications from '../../pages/api/applications';

describe('Applications API Route Tests', () => {
    let req;
    let res;

    beforeEach(() => {
        req = {
            method: 'GET',
        };
        res = {
            status: jest.fn(() => res),
            end: jest.fn(),
            json: jest.fn(() => res),
        };
    });

    it('Should return 405 if the method is not GET', async () => {
        req.method = 'POST';

        await applications(req, res);

        expect(res.status).toHaveBeenCalledWith(405);
        expect(res.end).toHaveBeenCalledTimes(1);
    });

    it('Should return response successfully', async () => {
        await applications(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.end).toHaveBeenCalledTimes(0);
        expect(res.json).toBeDefined();
    });
});
