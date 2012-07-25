module ApplicationHelper
  # from: http://stackoverflow.com/questions/6571753/rails-3-1-asset-pipeline-how-to-load-controller-specific-scripts
  def javascript( *files )
    content_for( :head ) { javascript_include_tag( *files ) }
  end

  def stylesheet( *files )
    content_for( :head ) { stylesheet_link_tag( *files ) }
  end
end