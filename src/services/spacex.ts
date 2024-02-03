import type { Doc, APISpaceXResponse } from "../types/api";

export const getLaunchById = async (id: string) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

    const launch = (await res.json()) as Doc;

    return launch;
}

export const getLastestLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 12
            }
        })
    });

    const { docs: launches } = await res.json() as APISpaceXResponse;

    return launches;
}