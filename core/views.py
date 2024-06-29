from django.views.generic import TemplateView


# Create your views here.
class IndexView(TemplateView):
    template_name = 'core/index.html'


class JoinWaitListView(TemplateView):
    template_name = 'core/waitlist.html'
