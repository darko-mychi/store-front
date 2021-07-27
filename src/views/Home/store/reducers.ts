import { State } from "glassx/dist/@types/store";

export const changeHome = (state: State) => ({ home: !state.home });
