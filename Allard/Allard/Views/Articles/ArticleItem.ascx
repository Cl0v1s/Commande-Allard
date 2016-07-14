<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ArticleItem.ascx.cs" Inherits="Allard.Views.Articles.ArticleItem" %>

<a href="Article.aspx?id=<%= this.Article.id %>">
    <div class="panel panel-article" title="<%= this.Article.title %>">
        <div class="ArticleItem-header">
            <a href="Article.aspx?id=<%= this.Article.id %>">
                <span class="author"><%= this.Dialect.By %> <%= this.Article.author1.firstName +" "+this.Article.author1.lastName %></span>
                <span class="date"><%= this.Dialect.The %> <%= Allard.Utils.TimeStampToDateTime(Article.date).ToString("dd/MM/yy "+ this.Dialect.At +" hh:mm") %></span>
            </a>
        </div>
        <div class="ArticleItem-body">
            <%= this.Article.resume %>
            <a class="click" href="Article.aspx?id=<%= this.Article.id %>"><%= this.Dialect.ClickToContinue %></a>
        </div>
    </div>
</a>
