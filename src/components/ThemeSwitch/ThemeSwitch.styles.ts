import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  & span.ant-switch-inner {
    display: flex;
    margin: 0 1px 0 32px;
  }

  & button.ant-switch-checked span.ant-switch-inner {
    margin: 0 32px 0 1px;
  }
`;
