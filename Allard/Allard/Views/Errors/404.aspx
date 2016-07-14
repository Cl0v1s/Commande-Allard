<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Layout.Master" AutoEventWireup="true" CodeBehind="404.aspx.cs" Inherits="Allard.Views.Errors._404" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title><%= this.Dialect.Error %> 404</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" runat="server">
    <div class="panel" title="<%= this.Dialect.Error %> 404">
        <div>
            <p>
                <%= this.Dialect.Error404 %>
            </p>
        </div>
    </div>
</asp:Content>
