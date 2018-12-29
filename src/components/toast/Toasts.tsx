import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { Toast } from "../../shared/interfaces/toast";
import { ToastContainer } from "./components/ToastContainer";

interface StateProps {
  toasts: Toast[];
}

type Props = StateProps;

class Toasts extends React.Component<Props> {
  public render() {
    return <ToastContainer toasts={this.props.toasts} />;
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  toasts: state.toast.toasts,
});

export default connect<StateProps, {}, {}, RootState>(mapStateToProps)(
  Toasts
) as React.ComponentClass<{}>;
