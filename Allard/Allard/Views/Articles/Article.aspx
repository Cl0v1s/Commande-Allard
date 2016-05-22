<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="Article.aspx.cs" Inherits="Allard.Views.Articles.Article" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div class="Article">
        <div class="Article-header">
            <h1 class="Article-title"><%= this._Article.title %></h1>
        </div>
        <div class="Article-body">
            <%= this._Article.content %>
        </div>
        <div class="Article-footer">
            <span class="Article-date"><%= Dialect.The %> <%= Allard.Utils.TimeStampToDateTime(this._Article.date).ToString("dd/MM/yy hh:mm") %></span>
            <span class="Article-author"><%= Dialect.By %> <%= this._Article.author1.firstName+" "+this._Article.author1.lastName %></span>
        </div>
        <div class="comments">
            <!--TODO: ajouter ici le système de commentaire Discuss-->
        </div>
    </div>
</asp:Content>
