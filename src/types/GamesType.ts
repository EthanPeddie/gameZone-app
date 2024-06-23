export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: PlatForm }[];
}

export interface PlatForm {
  id: number;
  slug: string;
  name: string;
}
