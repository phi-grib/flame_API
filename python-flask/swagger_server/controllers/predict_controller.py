import connexion
import six

from swagger_server.models.model import Model  # noqa: E501
from swagger_server.models.results import Results  # noqa: E501
from swagger_server import util


def get_models(searchString=None, limit=None):  # noqa: E501
    """Prediction models listing

    Search for available models # noqa: E501

    :param searchString: pass an optional search string for looking up inventory
    :type searchString: str
    :param limit: maximum number of models to return
    :type limit: int

    :rtype: List[Model]
    """
    return 'do some magic!'


def predict(modelID, upfile):  # noqa: E501
    """adds molecules and runs prediction with specified model 

     # noqa: E501

    :param modelID: model id to run prediction with
    :type modelID: str
    :param upfile: The .sdf or mol file to upload.
    :type upfile: werkzeug.datastructures.FileStorage

    :rtype: List[Results]
    """
    return 'do some magic!'
