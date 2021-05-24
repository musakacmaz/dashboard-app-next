const apps = [
    {
        "id": "1c6f1680-e468-471a-9217-ac4bef8c037e",
        "name": "Wakeup word detection",
        "deviceCount": 51,
        "platforms": [
            {
                "id": "eabcb303-12f4-4f87-9971-0b78da8b9261",
                "modelTarget": {
                    "model": "Bird-Feeder",
                    "runtime": "apple",
                    "version": "Sparrow"
                },
                "platform": "ios"
            },
            {
                "id": "e8ea8dd8-7edf-4bcf-9108-e0acb0f8dcc5",
                "modelTarget": {
                    "model": "ios-face-detect",
                    "runtime": "linux",
                    "version": "5193203"
                },
                "platform": "raspberry"
            }
        ]
    }
];

const models = [
    {
        "id": "fe5d2ecd-ee5a-4f4d-90fd-987d2e118b01",
        "name": "GPT3",
        "source": "github",
        "tags": ["gpt2", "lm-head", "causal-lm", "exbert"],
        "versions": [
            {
                "name": "generate-code"
            },
            {
                "name": "conversation"
            },
            {
                "name": "blog-posts"
            }
        ]
    }
];

const usage = {
    "Apps": {
        "limit": 20,
        "usage": 10
    },
}

const activities = [
    {
        "date": "2020-12-29 03:01:22",
        "desc": "New model has been uploaded `Model XXX`",
        "type": "create"
    }
]

jest.mock("../../hooks/useRequest", () => ({
  useGetData: () => ({
      applicationsData: apps,
      fetchApplicationsError: null,
      modelsData: models,
      fetchModelsError: null
    }),
}));

import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home Page Test', () => {
    it('should be able to rendered without crashing', async () => {
        render(<Home usageData={usage} activitiesData={activities} />);
        expect(screen.getByRole("heading", { name: "Limits and Usage" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Latest Activity" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Models" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Applications" })).toBeInTheDocument();
        expect(screen.getByText("Wakeup word detection")).toBeInTheDocument();
        expect(screen.getByText("github")).toBeInTheDocument();
        expect(screen.getByText("Apps")).toBeInTheDocument();
    });
});
