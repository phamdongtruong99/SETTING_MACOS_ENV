import { NodePlopAPI } from 'plop';

module.exports = function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'Generate a React component and test',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Component name, e.g. ProfileEmptyState',
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Directory path, without leading and trailing slashes',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/index.tsx',
        templateFile: 'src/codegen/plop-templates/component.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{directory}}/{{pascalCase namespace}}/__tests__/index.test.tsx',
        templateFile: 'src/codegen/plop-templates/component-test.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{directory}}/{{pascalCase namespace}}/index.stories.tsx',
        templateFile: 'src/codegen/plop-templates/component-storybook.hbs',
      },
    ],
  });

  plop.setGenerator('styled-component', {
    description: 'Generate a React component that implements styled-components',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Component name, e.g. Text',
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Directory path, without leading and trailing slashes',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase namespace}}/index.tsx',
        templateFile: 'src/codegen/plop-templates/component-styled.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{directory}}/{{pascalCase namespace}}/__tests__/index.test.tsx',
        templateFile: 'src/codegen/plop-templates/component-styled-test.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{directory}}/{{pascalCase namespace}}/index.stories.tsx',
        templateFile: 'src/codegen/plop-templates/component-storybook.hbs',
      },
    ],
  });

  plop.setGenerator('next-page', {
    description: 'Generate a Next.js page',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Page name, e.g. ContactUs',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'pages/{{kebabCase namespace}}.tsx',
        templateFile: 'src/codegen/plop-templates/next-page.hbs',
      },
      {
        type: 'add',
        path: 'src/tests/{{kebabCase namespace}}/index.test.tsx',
        templateFile: 'src/codegen/plop-templates/next-page-test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase namespace}}/index.tsx',
        templateFile: 'src/codegen/plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase namespace}}/__tests__/index.test.tsx',
        templateFile: 'src/codegen/plop-templates/component-test.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase namespace}}/index.stories.tsx',
        templateFile: 'src/codegen/plop-templates/component-storybook.hbs',
      },
    ],
  });

  plop.setGenerator('util', {
    description: 'Generate a JavaScript utility function and test',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Method name, e.g. transformUserPayload',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/utils/{{camelCase namespace}}/index.ts',
        templateFile: 'src/codegen/plop-templates/util.hbs',
      },
      {
        type: 'add',
        path: 'src/utils/{{camelCase namespace}}/index.test.ts',
        templateFile: 'src/codegen/plop-templates/util-test.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Generate a React hook',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'Method name, e.g. useRedirectTo',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase namespace}}/index.ts',
        templateFile: 'src/codegen/plop-templates/util.hbs',
        abortOnFail: false,
      },
      {
        type: 'add',
        path: 'src/hooks/{{camelCase namespace}}/index.test.ts',
        templateFile: 'src/codegen/plop-templates/util-test.hbs',
        abortOnFail: false,
      },
    ],
  });

  // Redux
  plop.setGenerator('redux', {
    description: 'Generate Redux boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'namespace',
        message: 'state property name, e.g. userId, age',
      },
      {
        type: 'input',
        name: 'action',
        message: 'action name, e.g. set, add',
      },
      {
        type: 'input',
        name: 'state_type',
        message: 'TypeScript type of the state property, e.g. string, number',
      },
    ],
    actions: [
      // Generate action
      {
        type: 'add',
        path: 'src/redux/actions/{{camelCase namespace}}Actions.ts',
        templateFile: 'src/codegen/plop-templates/redux-action.hbs',
      },
      // Generate selector
      {
        type: 'add',
        path: 'src/redux/selectors/{{camelCase namespace}}Selectors.ts',
        templateFile: 'src/codegen/plop-templates/redux-selector.hbs',
      },
      // Generate reducer
      {
        type: 'add',
        path: 'src/redux/reducers/{{camelCase namespace}}Reducer.ts',
        templateFile: 'src/codegen/plop-templates/redux-reducer.hbs',
      },
    ],
  });
};
