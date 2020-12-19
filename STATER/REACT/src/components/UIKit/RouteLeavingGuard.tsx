import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Prompt, useHistory } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

interface Props {
  title: string;
  description: string;
  acceptButtonTitle: string;
  when: boolean;
  shouldBlockNavigation: () => void;
}

const RouteLeavingGuard: FC<Props> = ({
  when,
  title,
  description,
  shouldBlockNavigation,
  acceptButtonTitle,
}) => {
  const ref = useRef(null);
  const history = useHistory();
  const [lastLocation, setLastLocation] = useState(null);
  const [confirmedNavigation, setConfirmNavigation] = useState(false);

  const showModal = (location) => {
    ref.current.toggleVisible();
    setLastLocation(location);
  };

  const closeModal = (callback) => {
    ref.current.toggleVisible();
    callback && callback();
  };

  const handleBlockedNavigation = (nextLocation) => {
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      showModal(nextLocation);
      return false;
    }
    return true;
  };

  const handleConfirmNavigationClick = () => {
    setConfirmNavigation(true);
  };

  useEffect(() => {
    if (confirmedNavigation) {
      history.push(lastLocation.pathname);
    }
  }, [confirmedNavigation]);

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      <ConfirmModal
        ref={ref}
        title={title}
        description={description}
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
        acceptButtonTitle={acceptButtonTitle}
      />
    </>
  );
};

export default RouteLeavingGuard;
