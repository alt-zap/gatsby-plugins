import path from 'path'

export const onCreateWebpackConfig = ({ actions }: any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.join(process.cwd(), 'node_modules/react'),
      },
    },
  })
}
