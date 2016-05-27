from ipywidgets import DOMWidget
from traitlets import Unicode, Int

class IGrapherWidget(DOMWidget):
    _view_name = Unicode('IGrapherView').tag(sync=True)
    _view_module = Unicode('igrapher.js').tag(sync=True)
