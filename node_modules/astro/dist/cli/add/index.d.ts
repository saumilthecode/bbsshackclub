import type yargs from 'yargs-parser';
interface AddOptions {
    flags: yargs.Arguments;
}
export declare function add(names: string[], { flags }: AddOptions): Promise<void>;
export {};
