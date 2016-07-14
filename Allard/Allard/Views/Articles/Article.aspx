<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="Article.aspx.cs" Inherits="Allard.Views.Articles.Article" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div class="panel panel-article" title="<%= this._Article.title %>">
        <div class="Article-body">
            <%= this._Article.content %>
        </div>
        <div class="Article-footer">
            <span class="date"><%= Dialect.The %> <%= Allard.Utils.TimeStampToDateTime(this._Article.date).ToString("dd/MM/yy hh:mm") %></span>
            <span class="author"><%= Dialect.By %> <%= this._Article.author1.firstName+" "+this._Article.author1.lastName %></span>
        </div>

    </div>
    <div class="panel panel-comments" title="<%= this.Dialect.GetPlural(this.Dialect.Comment) %>">
        <!--Insérer ici le système de commentaire Disqus-->
    </div>
</asp:Content>
