
export const TEST_ACTION = 'TEST_ACTION';

//test的action
export function testAction(data) {
  return {
    type: 'TEST_ACTION',
    content: data
  }
}
