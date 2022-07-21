/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IInstallerType } from "interfaces/installer";
import sendRequest from "services";
import ENDPOINTS from "utilities/endpoints";

export interface IDownloadInstallerRequestParams {
  enrollSecret: string;
  includeDesktop: boolean;
  installerType: IInstallerType;
}

export default {
  downloadInstaller: ({
    enrollSecret,
    includeDesktop,
    installerType,
  }: IDownloadInstallerRequestParams): Promise<BlobPart> => {
    const path = `${ENDPOINTS.DOWNLOAD_INSTALLER}/${encodeURIComponent(
      enrollSecret
    )}/${installerType}?desktop=${includeDesktop}`;
    console.log("path: ", path);

    return sendRequest("GET", path, undefined, "blob");
  },
};