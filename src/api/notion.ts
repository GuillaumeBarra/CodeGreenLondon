import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

const NOTION_API_KEY = process.env.NOTION_API_KEY ?? "";

export const notion = new Client({ auth: NOTION_API_KEY });

export const queryDatabase = async () =>
  await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? "",
  });

export type CGLEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  link: string;
};

export const parseProperties = (database: QueryDatabaseResponse): CGLEvent[] =>
  database.results.map((row: any) => {
    const { id } = row;

    const titleCell = row.properties.title.title;
    const title = titleCell?.[0]?.plain_text ?? "";

    const dateCell = row.properties.date;
    const date = dateCell?.date?.start ?? "";

    const descriptionCell = row.properties.description.rich_text;
    const description = descriptionCell?.[0]?.plain_text ?? "" ?? "";

    const locationCell = row.properties.location.rich_text;
    const location = locationCell?.[0]?.plain_text ?? "";

    const linkCell = row.properties.link;
    const link = linkCell?.url ?? "";

    return { id, title, date, description, location, link };
  });
