import { getDictionary } from './[lang]/dictionaries';

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
export type DictSection<T extends keyof Dictionary> = Dictionary[T];
