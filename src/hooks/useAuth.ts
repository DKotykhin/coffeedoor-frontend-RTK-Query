import { getToken } from "services/getToken";
import { useFetchUserByTokenQuery } from "services/userService";

import { IUserLoginByTokenResponse } from "types/userTypes";

export const useAuth = (): {
    isSuccess: boolean;
    isError: boolean;
    data: IUserLoginByTokenResponse | undefined;
} => {
    const { data, isSuccess, isError } = useFetchUserByTokenQuery(undefined, {
        skip: !getToken(),
    });
    // console.log(data);
    return { isSuccess, isError, data };
};
