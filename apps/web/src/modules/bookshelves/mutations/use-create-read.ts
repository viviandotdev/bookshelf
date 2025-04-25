import { gql, useMutation } from '@apollo/client';

const CREATE_READ = gql`
    mutation CreateRead($data: ReadCreateInput!) {
        createRead(data: $data) {
            id
            active
            type
            capacity
            startDate
            userBookId
        }
    }
`;

export const useCreateRead = () => {
    const [createReadMutation] = useMutation(CREATE_READ);

    const createRead = async (variables: any) => {
        return createReadMutation(variables);
    };

    return { createRead };
};
