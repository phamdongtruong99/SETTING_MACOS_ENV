import gql from 'graphql-tag';

export const uploadFileMutaion = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;
