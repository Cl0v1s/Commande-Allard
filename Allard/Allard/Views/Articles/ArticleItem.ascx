<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ArticleItem.ascx.cs" Inherits="Allard.Views.Articles.ArticleItem" %>
<div class="ArticleItem">
    <div class="ArticleItem-header">
        <a href="Article.aspx?id=<%= this.Article.id %>">
            <h1 class="ArticleItem-title"><%= this.Article.title %></h1>
            <span class="ArticleItem-author"><%= this.Dialect.By %> <%= this.Article.author1.firstName +" "+this.Article.author1.lastName %></span>
            <span class="ArticleItem-date"><%= this.Dialect.The %> <%= Allard.Utils.TimeStampToDateTime(Article.date).ToString("dd/MM/yy hh:mm") %></span>
        </a>
    </div>
    <div class="ArticleItem-body">
        <%= this.Article.resume %>
    </div>
</div>
