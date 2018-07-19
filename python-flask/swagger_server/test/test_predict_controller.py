# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.model import Model  # noqa: E501
from swagger_server.models.results import Results  # noqa: E501
from swagger_server.test import BaseTestCase


class TestPredictController(BaseTestCase):
    """PredictController integration test stubs"""

    def test_get_models(self):
        """Test case for get_models

        Prediction models listing
        """
        query_string = [('searchString', 'searchString_example'),
                        ('limit', 50)]
        response = self.client.open(
            '/flame/predict',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_predict(self):
        """Test case for predict

        adds molecules and runs prediction with specified model 
        """
        data = dict(upfile=(BytesIO(b'some file data'), 'file.txt'))
        response = self.client.open(
            '/flame/predict/{modelID}'.format(modelID='modelID_example'),
            method='POST',
            data=data,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
